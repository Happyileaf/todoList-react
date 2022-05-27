/*
 * @Author: happy 997401767@qq.com
 * @Date: 2022-05-23 16:29:01
 * @LastEditors: happy 997401767@qq.com
 * @LastEditTime: 2022-05-24 18:28:15
 * @FilePath: \todo-list\src\components\List\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
	}

	render() {
		// console.log(this.props.filter)
		const { todos,filter,updateTodo, deleteTodo } = this.props
		let newTodos
		switch (filter) {
			case 'all': 
				newTodos = todos
				break
			;
			case 'todo': 
				newTodos = todos.filter((todoObj) => {
					return !todoObj.completed
				})
				break
			;
			case 'completed': 
				newTodos = todos.filter((todoObj) => {
					return todoObj.completed
				})
				break
			;
			default: newTodos = todos
		}
		return (
			<ul className="todo-main">
				{
					newTodos.map(todo => {
						return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
					})
				}
			</ul>
		)
	}
}