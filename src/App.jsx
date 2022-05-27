/*
 * @Author: happy 997401767@qq.com
 * @Date: 2022-05-23 16:29:01
 * @LastEditors: happy 997401767@qq.com
 * @LastEditTime: 2022-05-24 17:18:29
 * @FilePath: \todo-list\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import TodoList from './components/TodoList'
import './App.css'

export default class App extends Component {

	render() {
		return (
			<section className="todo-list">
				<TodoList></TodoList>
			</section>
		)
	}
}
