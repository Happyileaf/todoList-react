/*
 * @Author: happy 997401767@qq.com
 * @Date: 2022-05-24 14:01:41
 * @LastEditors: happy 997401767@qq.com
 * @LastEditTime: 2022-05-24 18:25:31
 * @FilePath: \todo-list\src\components\TodoList\components\Item\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	//勾选或取消勾选
	handleCheck = (id) => {
		return (event) => {
			this.props.updateTodo(id, event.target.checked)
		}
	}

	//删除任务
	handleDelete = (id) => {
		return () => {
			if (window.confirm('确定删除吗？')) {
				this.props.deleteTodo(id)
			}
		}

	}
	
	render() {
		const { id, name, completed } = this.props
		return (
			<li className='todo-item'>
				<label>
					<input className="toggle" type="checkbox" checked={completed} onChange={this.handleCheck(id)} />
					<span>{name}</span>
				</label>
				<button onClick={this.handleDelete(id)} className="btn btn-danger" >删除</button>
			</li>
		)
	}
}