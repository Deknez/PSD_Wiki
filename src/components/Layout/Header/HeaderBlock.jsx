import styled from 'styled-components'

const Header = styled.header`
	background-color: white;

	nav ul {
		padding: 0.8rem;
		display: flex;
		justify-content: space-around;

		li {
			list-style: none;

			a {
				text-decoration: none;
			}
		}
	}
`

function HeaderBlock() {
	return (
		<Header>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/dashboard">Dashboard</a>
					</li>
					<li>
						<a href="/schedule">Schedule</a>
					</li>
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/sign-up">Sign Up</a>
					</li>
				</ul>
			</nav>
		</Header>
	)
}

export default HeaderBlock
