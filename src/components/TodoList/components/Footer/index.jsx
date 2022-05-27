/*
 * @Author: happy 997401767@qq.com
 * @Date: 2022-05-24 14:01:41
 * @LastEditors: happy 997401767@qq.com
 * @LastEditTime: 2022-05-24 17:35:47
 * @FilePath: \todo-list\src\components\TodoList\components\Footer\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	//清除已完成任务
	handleClearAllDone = () => {
		this.props.clearAllDone()
	}

	render() {
		const { todos } = this.props
		const doneCount = todos.reduce((pre, todo) => pre + (todo.completed ? 1 : 0), 0)
		const total = todos.length
		return (
			<div className="todo-footer">
				<span>
					<span>todo - {total - doneCount}</span> / all - {total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}
