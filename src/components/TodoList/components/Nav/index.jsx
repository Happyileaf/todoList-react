/*
 * @Author: happy 997401767@qq.com
 * @Date: 2022-05-24 14:55:01
 * @LastEditors: happy 997401767@qq.com
 * @LastEditTime: 2022-05-24 18:16:24
 * @FilePath: \todo-list\src\components\TodoList\components\Nav\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Nav extends Component {

	static propTypes = {
		filterTodos: PropTypes.func.isRequired
	}

	// 更新filter
	handleClick = (event) => {
		this.props.filterTodos(event.target.innerText)
	}

	render() {
		const navList = ['all', 'todo', 'completed']
		return (
			<div className="todo-nav">
				<ul>
					{
						navList.map((item,index) => {
							return <span onClick={this.handleClick} key={index} className={this.props.filter === item?'checked':''}>{item}</span>
						})
					}
				</ul>
			</div>
		)
	}
}