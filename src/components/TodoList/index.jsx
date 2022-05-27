/*
 * @Author: happy 997401767@qq.com
 * @Date: 2022-05-23 16:29:01
 * @LastEditors: happy 997401767@qq.com
 * @LastEditTime: 2022-05-24 18:15:34
 * @FilePath: \todo-list\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import List from './components/List'
import Footer from './components/Footer'
import './index.css'

export default class TodoList extends Component {

	//初始化状态
	state = {
		todos: [
			{ id: '001', name: '吃饭', completed: true },
			{ id: '002', name: '睡觉', completed: true },
			{ id: '003', name: '逛街', completed: true },
			{ id: '004', name: '吃饭', completed: false },
			{ id: '005', name: '睡觉', completed: false },
			{ id: '006', name: '逛街', completed: false },
		],
		filter: 'all'
	}

	// 新增任务
	addTodo = (todoObj) => {
		const { todos } = this.state
		const newTodos = [todoObj, ...todos]
		this.setState({ todos: newTodos })
	}

	// 更新任务
	updateTodo = (id, completed) => {
		const { todos } = this.state
		const newTodos = todos.map((todoObj) => {
			if (todoObj.id === id) return { ...todoObj, completed }
			else return todoObj
		})
		this.setState({ todos: newTodos })
	}

	// 删除任务
	deleteTodo = (id) => {
		const { todos } = this.state
		const newTodos = todos.filter((todoObj) => {
			return todoObj.id !== id
		})
		this.setState({ todos: newTodos })
	}

	// 更新过滤条件
	filterTodos = (filter) => {
		this.setState({ filter: filter })
	}

	//清除所有已完成任务
	clearAllDone = () => {
		const { todos } = this.state
		const newTodos = todos.filter((todoObj) => {
			return !todoObj.completed
		})
		this.setState({ todos: newTodos })
	}

	render() {
		const { todos, filter } = this.state
		return (
			<section className="todo-app">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} />
					<Nav filter={filter} filterTodos={this.filterTodos}></Nav>
					<List todos={todos} filter={filter} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
					<Footer todos={todos} clearAllDone={this.clearAllDone} />
				</div>
			</section>
		)
	}
}
