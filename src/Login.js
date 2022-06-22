import { useState } from "react";

export function Login() {
	const [data, setData] = useState({
		username: "",
		password: "",
		remember: "false",
	});

	function handleInputChange(event) {
		const { name, type, value, checked } = event.target;

		setData((data) => {
			return {
				...data,
				[name]: type === "checkbox" ? checked : value,
			};
		});
		console.log(data);
	}

	return (
		<form>
			<input
				onChange={handleInputChange}
				value={data.username}
				name="username"
			/>
			<input
				onChange={handleInputChange}
				value={data.password}
				type="password"
				name="password"
			/>
			<input
				onChange={handleInputChange}
				value={data.remember}
				type="checkbox"
				name="checkbox"
			/>
		</form>
	);
}
