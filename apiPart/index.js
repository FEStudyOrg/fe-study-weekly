document.addEventListener('DOMContentLoaded', async () => {
  // 로직에 필요한 DOM 요소 불러오기
  const main = document.querySelector('#main');
  const addButton = document.querySelector('.todo_addButton');
  const allDeleteButton = document.querySelector('.todo_allDeleteButton');
  const sortAscButton = document.querySelector('.todo_sortByTime_asc');
  const sortDescButton = document.querySelector('.todo_sortByTime_desc');
  const restWorkCount = document.querySelector('.rest_work_count');
  const categoryStudyButton = document.querySelector('.todo_category_study');
  const categoryExerciseButton = document.querySelector('.todo_category_exercise');
  const categoryChoreButton = document.querySelector('.todo_category_chore');
  const showAllButton = document.querySelector('.todo_all');

  // 남은 todo 세기
  const updateTodoNumber = () => {
    const incompleteTodos = document.querySelectorAll(
      '.memo_container .completeTodo:not(:checked)'
    ).length;
    restWorkCount.textContent = `${incompleteTodos}`;
  };

  // 페이지 로드시 기존 Memo 가져오기(GET)
  const getExistingMemos = async () => {
    try {
      const response = await fetch('http://localhost:5001/todo', { method: 'GET' });
      const memoList = await response.json();
      console.log('메모리스트가 비었을 때 정보', memoList);

      if (memoList.allTodos.length === 0) {
        alert('메모가 없습니다! 메모를 생성하세요.');
        return;
      }

      console.log('서버 응답:', memoList);
      memoList.allTodos.forEach((todoData) => createMemo(todoData, true));
    } catch (error) {
      console.error('메모를 불러오는 중 오류 발생:', error);
    }
  };

  // 메모 가져오기 함수 실행
  getExistingMemos().then(updateTodoNumber);

  const formatDate = (isoString) => {
    if (!isoString) return '';
    return isoString.split('T')[0]; // "2025-03-06T00:00:00.000Z" → "2025-03-06"
  };

  // 메모 생성 함수
  const createMemo = (todoData, isExisting = false) => {
    let memoId = isExisting ? todoData._id : '';
    const memo = document.createElement('form');
    memo.classList.add('memo_container');

    // 배경색 설정
    switch (todoData.category) {
      case 'study':
        memo.style.backgroundColor = 'var(--category-study-color)';
        break;
      case 'exercise':
        memo.style.backgroundColor = 'var(--category-exercise-color)';
        break;
      case 'chore':
      default:
        memo.style.backgroundColor = 'var(--category-chore-color)';
    }

    // HTML 구조 추가
    memo.innerHTML = `
         <div class='memo_selectAndCheckbox_container'>
          <select name="category" class='memo_category_selector' required>
              <option value='study' ${todoData.category === 'study' ? 'selected' : ''}>공부</option>
              <option value='exercise' ${todoData.category === 'exercise' ? 'selected' : ''}>운동</option>
              <option value='chore' ${todoData.category === 'chore' ? 'selected' : ''}>기타</option>
          </select>
          <select name="priority" class='memo_priority_selector' required>
              <option value='high' ${todoData.priority === 'high' ? 'selected' : ''}>높음</option>
              <option value='medium' ${todoData.priority === 'medium' ? 'selected' : ''}>중간</option>
              <option value='low' ${todoData.priority === 'low' ? 'selected' : ''}>낮음</option>
          </select>
          <label class='completeTodoLabel'>완료여부: <input name='isCompleted' class='completeTodo' type='checkbox' ${todoData.isCompleted ? 'checked' : ''} required></label>
      </div>
      <div class='memo_record_container'>
          <textarea name="task" class='memo_record' placeholder='할 일을 입력하세요!' required>${todoData.task}</textarea>
          <input name='dueDate' type='date' class='dueDate' value="${formatDate(todoData.dueDate)}" required>
      </div>
      <div class='memo_button_container'>
        <button type='button' class='submitButton' style='${isExisting ? 'display: none;' : 'display: block;'}'>POST IT!</button>
        <button type='button' class='modifyButton' style='${isExisting ? 'display: block;' : 'display: none;'}'>수정</button>
        <button type='button' class='deleteButton' style='${isExisting ? 'display: block;' : 'display: none;'}'>삭제</button>
      </div>
      `;

    if (isExisting && todoData.isCompleted === true) {
      memo.querySelector('.memo_category_selector').disabled = true;
      memo.querySelector('.memo_priority_selector').disabled = true;
      memo.querySelector('.memo_record').disabled = true;
      memo.querySelector('.dueDate').disabled = true;
      memo.querySelector('.submitButton').style.display = 'none';
      memo.querySelector('.modifyButton').style.display = 'none';
    }

    // 개별 삭제 버튼 이벤트 (DELETE using ID)
    memo.querySelector('.deleteButton').addEventListener('click', async (event) => {
      event.preventDefault();
      if (!confirm('해당 메모를 정말로 삭제하시겠습니까? 삭제 이후 복구할 수 없습니다.')) return;

      try {
        const response = await fetch(`http://localhost:5001/todo/${memoId}`, { method: 'DELETE' });
        if (!response.ok) throw new Error(`서버 오류: ${response.status} ${response.statusText}`);

        memo.remove();

        const result = response.json();
        console.log('서버 응답: ', result);
        alert('해당 메모를 삭제했습니다.');

        updateTodoNumber();
      } catch (error) {
        console.error('삭제 요청 실패:', error);
        alert('삭제 중 오류가 발생했습니다.');
      }
    });

    // 완료 체크 이벤트 (PATCH using ID)
    memo.querySelector('.completeTodo').addEventListener('change', async (event) => {
      if (memoId === '') {
        alert('먼저 메모를 생성해주세요!');
        event.target.checked = false;
        return;
      }
      if (!confirm('정말로 완료하시겠습니까? 이후 내용을 수정할 수 없습니다.')) {
        event.target.checked = false;
        return;
      }

      try {
        const response = await fetch(`http://localhost:5001/todo/${memoId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ isCompleted: true }),
        });

        if (!response.ok) throw new Error(`서버 오류: ${response.status} ${response.statusText}`);

        const result = response.json();
        console.log('서버 응답: ', result);
        alert('할일 완료!');
        event.target.disabled = true;
        memo.querySelector('.memo_category_selector').disabled = true;
        memo.querySelector('.memo_priority_selector').disabled = true;
        memo.querySelector('.memo_record').disabled = true;
        memo.querySelector('.dueDate').disabled = true;
        memo.querySelector('.submitButton').style.display = 'none';
        memo.querySelector('.modifyButton').style.display = 'none';

        updateTodoNumber();
      } catch (error) {
        console.error('완료 요청 실패:', error);
        alert('완료 중 오류가 발생했습니다.');
      }
    });

    // 수정 버튼 이벤트 (PATCH using ID)
    memo.querySelector('.modifyButton').addEventListener('click', async (event) => {
      event.preventDefault();
      if (!confirm('정말로 수정하시겠습니까?')) return;

      try {
        const formData = new FormData(memo);
        const data = Object.fromEntries(formData);
        data.completed = memo.querySelector('.completeTodo').checked;

        const response = await fetch(`http://localhost:5001/todo/${memoId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error(`서버 오류: ${response.status} ${response.statusText}`);
        const result = await response.json();
        console.log('서버 응답: ', result);
        alert('수정이 완료됐습니다.');
      } catch (error) {
        console.error('수정 요청 실패:', error);
        alert('수정 중 오류가 발생했습니다.');
      }
    });

    // 전송 버튼 이벤트 (POST)
    memo.querySelector('.submitButton').addEventListener('click', async (event) => {
      event.preventDefault();
      if (!confirm('메모를 생성하시겠습니까?')) return;

      try {
        const formData = new FormData(memo);
        const data = Object.fromEntries(formData);
        data.completed = memo.querySelector('.completeTodo').checked; // 처음 생성한 chekcbox는 undefined가 들어갈 수 있으므로, 한번 더 할당

        const response = await fetch('http://localhost:5001/todo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error(`서버 오류: ${response.status} ${response.statusText}`);

        const result = await response.json();
        memoId = result.todo._id;

        // 버튼 변경
        memo.querySelector('.submitButton').style.display = 'none';
        memo.querySelector('.deleteButton').style.display = 'block';
        memo.querySelector('.modifyButton').style.display = 'block';

        console.log('서버응답: ', result);
        alert('생성이 완료됐습니다.');

        updateTodoNumber();
      } catch (error) {
        console.error('생성 요청 실패:', error);
        alert('생성 중 오류가 발생했습니다.');
      }
    });

    // `main` 컨테이너에 추가
    main.appendChild(memo);

    updateTodoNumber();
  };

  // 테마 변경 시 스타일 변경 (이벤트 위임 적용)
  document.addEventListener('change', (event) => {
    if (event.target.classList.contains('memo_category_selector')) {
      const memo = event.target.closest('.memo_container');
      if (!memo) return;

      switch (event.target.value) {
        case 'study':
          memo.style.backgroundColor = 'var(--category-study-color)';
          break;
        case 'exercise':
          memo.style.backgroundColor = 'var(--category-exercise-color)';
          break;
        case 'chore':
        default:
          memo.style.backgroundColor = 'var(--category-chore-color)';
      }
    }
  });

  // 신규 메모 UI 추가 이벤트
  addButton.addEventListener('click', () => {
    const tempTodoData = {
      task: '',
      category: 'chore',
      dueDate: '',
      priority: 'low',
      isCompleted: false,
    };
    createMemo(tempTodoData, false);
  });

  // 모든 메모 삭제 이벤트(DELETE)
  allDeleteButton.addEventListener('click', async () => {
    if (!confirm('정말 모든 메모를 삭제하시겠습니까? 삭제 이후 복구할 수 없습니다.')) return;

    try {
      const response = await fetch('http://localhost:5001/todo', { method: 'DELETE' });

      if (!response.ok) {
        throw new Error(`서버 오류: ${response.status} ${response.statusText}`);
      }

      document.querySelectorAll('.memo_container').forEach((memo) => memo.remove());

      const result = await response.json();
      console.log('서버 응답:', result);
      alert('모든 메모가 삭제되었습니다.');
      updateTodoNumber();
    } catch (error) {
      console.error('삭제 요청 실패:', error);
      alert('삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  });

  // 마감 기한을 기준으로 정렬하는 함수
  const sortMemos = (ascending = true) => {
    const memoArray = Array.from(document.querySelectorAll('.memo_container'));

    memoArray.sort((a, b) => {
      const dateA = a.querySelector('.dueDate').value || '9999-12-31';
      const dateB = b.querySelector('.dueDate').value || '9999-12-31';

      return ascending ? dateA.localeCompare(dateB) : dateB.localeCompare(dateA);
    });

    memoArray.forEach((memo) => main.appendChild(memo));
  };

  // 오름차순(과거순) 정렬 버튼 기능 추가
  sortAscButton.addEventListener('click', () => {
    sortMemos(true);
  });

  // 내림차순(최신순) 정렬 버튼 기능 추가
  sortDescButton.addEventListener('click', () => {
    sortMemos(false);
  });

  // 특정 카테고리 필터링 함수
  const filterMemos = (category) => {
    document.querySelectorAll('.memo_container').forEach((memo) => {
      const selectedValue = memo.querySelector('.memo_category_selector').value;
      memo.style.display = selectedValue === category ? 'flex' : 'none';
    });
  };

  // 공부 카테고리 필터
  categoryStudyButton.addEventListener('click', () => {
    filterMemos('study');
  });

  // 운동 카테고리 필터
  categoryExerciseButton.addEventListener('click', () => {
    filterMemos('exercise');
  });

  // 기타 카테고리 필터
  categoryChoreButton.addEventListener('click', () => {
    filterMemos('chore');
  });

  // 모든 메모 다시 표시
  showAllButton.addEventListener('click', () => {
    document.querySelectorAll('.memo_container').forEach((memo) => {
      memo.style.display = 'flex';
    });
  });
});
