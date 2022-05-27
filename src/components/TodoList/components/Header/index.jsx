/*
 * @Author: happy 997401767@qq.com
 * @Date: 2022-05-24 14:01:41
 * @LastEditors: happy 997401767@qq.com
 * @LastEditTime: 2022-05-24 17:53:51
 * @FilePath: \todo-list\src\components\TodoList\components\Header\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.todoInput = React.createRef();
	}
	
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}
	
	// 点击添加
	handleClick = (event) => {
		// const { target } = event
		const { value: todoItem } = this.todoInput.current
		if (todoItem.trim() === '') {
			alert('输入不能为空')
			return
		}
		const todoObj = { id: nanoid(), name: todoItem, completed: false }
		this.props.addTodo(todoObj)
		this.todoInput.current.value = ''
	}

	// 回车添加
	handleKeyUp = (event) => {
		const { keyCode, target } = event
		if (keyCode !== 13) return
		if (target.value.trim() === '') {
			alert('输入不能为空')
			return
		}
		const todoObj = { id: nanoid(), name: target.value, completed: false }
		this.props.addTodo(todoObj)
		target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<input ref={this.todoInput} onKeyUp={this.handleKeyUp} type="text" placeholder="请输入待办任务" />
				<button onClick={this.handleClick} >添加</button>
			</div>
		)
	}
}