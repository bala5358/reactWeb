import React, { Fragment, useContext, useState, useRef } from 'react';
import { Plus } from 'react-feather';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';
import { Breadcrumbs, H5, Btn } from '../../../AbstractElements';
import { AddNewTask, AddTask, Close, ToDo } from '../../../Constant';
import TodoContext from '../../../_helper/Todo';
import TodoCheckbox from './TodoCheckbox';
import TodoList from './TodoList';
import TodoSideBar from './TodoSideBar';

const TodoContain = () => {
  const { addNewTodo } = useContext(TodoContext);
  const [addTask, setAddTask] = useState('');
  const [task, setTask] = useState('');
  const [inputError, setInputError] = useState(false);
  const addTaskBtnRef = useRef(null);
  const newTaskInputRef = useRef(null);

  const openTaskWrapper = () => {
    setAddTask(' visible');
    if (addTaskBtnRef.current) {
      addTaskBtnRef.current.classList.add('hide');
    }
  };

  const closeTaskWrapper = () => {
    setAddTask('');
    setInputError(false);
    if (addTaskBtnRef.current) {
      addTaskBtnRef.current.classList.remove('hide');
    }
  };

  const onTaskChanged = (e) => {
    setTask(e.target.value);
    setInputError(false);
  };

  const addNewTask = () => {
    if (task.trim() === '') {
      setInputError(true);
      if (newTaskInputRef.current) {
        newTaskInputRef.current.focus();
      }
    } else {
      addNewTodo({ task });
      setTask('');
      setAddTask('');
      setInputError(false);
      if (addTaskBtnRef.current) {
        addTaskBtnRef.current.classList.remove('hide');
      }
      if (newTaskInputRef.current) {
        newTaskInputRef.current.value = '';
      }
    }
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle='Task' parent='Apps' title='Task' />
      <Container fluid={true} className='email-wrap bookmark-wrap todo-wrap'>
        <Row>
          <TodoSideBar />
          <Col xl='9' className='xl-70 box-col-12'>
            <Card>
              <CardHeader className='d-flex align-items-center justify-content-between'>
                <H5>{ToDo}</H5>
                <div className='d-flex align-items-center gap-3'>
                  <div className='todo'>
                    <div className='todo-list-wrapper'>
                      <TodoCheckbox />
                    </div>
                  </div>
                  <Btn 
                    attrBtn={{ 
                      color: 'primary d-flex align-items-center', 
                      onClick: openTaskWrapper,
                      id: 'addTaskBtn',
                      innerRef: addTaskBtnRef
                    }}
                  >
                    <Plus style={{ width: '18px', height: '18px' }} className='me-2' /> {AddNewTask}
                  </Btn>
                </div>
              </CardHeader>
              <CardBody>
                <div className='todo'>
                  <div className='todo-list-wrapper'>
                    <div className='todo-list-container todo-list-footer'>
                      <div className={'new-task-wrapper mb-4' + addTask}>
                        <textarea 
                          ref={newTaskInputRef}
                          className={`ng-untouched ng-pristine ${inputError ? 'border-danger' : ''}`}
                          id='newtask' 
                          placeholder='Enter new task here. . .' 
                          value={task}
                          onChange={onTaskChanged}
                        />
                        <Btn attrBtn={{ color: 'danger', className: 'cancel-btn', id: 'close-task-panel', onClick: closeTaskWrapper }}>
                          {Close}
                        </Btn>
                        <Btn attrBtn={{ color: 'success', className: 'ms-3 add-new-task-btn', id: 'add-task', onClick: addNewTask }}>
                          {AddTask}
                        </Btn>
                      </div>
                      <TodoList />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TodoContain;