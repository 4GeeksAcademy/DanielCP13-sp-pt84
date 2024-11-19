import React, { useState } from "react";

const styleInput = {
	marginTop: 0,
	fontSize: "0.5em",
	width: "50%",
};

const styleFoil = {
	marginTop: "0.3em",

	background: "white",
};
const styleTask = {
	textAlign: "left",
	borderBottom: "1px solid blue",

};


const Home = () => {

	const [list, setList] = useState([]);
	const [visibleIcon, setVisibleIcon] = useState(false);

	function mouseOver(index) {
		setVisibleIcon(index);
	};
	function mouseExit() {
		setVisibleIcon(null);
	};

	function deleteTask(index) {
		list.splice(index, 1);
	};

	return (
		<>
			<div className="container opacity-50">
				<h4 className="text-center mt-2 mb-0">My ToDo List</h4>
				<input
					className="form-control mx-auto" style={styleInput} type="text" placeholder="New Task"
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setList([...list, e.target.value]);
							e.target.value = "";
						}
					}} />
			</div>
			<div className="container" style={styleFoil} >
				{list.map((task, index) => {
					return (
						<div className="row" key={index} onMouseEnter={() => mouseOver(index)} onMouseLeave={mouseExit}>
							<div className="col-1" style={{ ...styleTask, borderRight: "1px solid red" }}></div>
							<div className="col-10" style={styleTask}>{task}</div>
							<div className="col-1" style={styleTask}>
								<i className="fa-solid fa-eraser" onClick={() => { deleteTask(index) }}
									style={{ opacity: visibleIcon === index ? 1 : 0 }}></i>
							</div>
						</div>
					)
				}
				)}
			</div>
			<div className="container bg-white text-black-50" >
				<p>{list.length === 0 ? "No tasks, add tasks" : `You have ${list.length} tasks.`}</p>
			</div>
		</>
	);
};

export default Home;
