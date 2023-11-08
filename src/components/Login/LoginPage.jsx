import styled from 'styled-components'

const LoginWrapper = styled.div`
	a {
		color: #000000;
		text-decoration: underline;
		transition: color 0.3s;
	}
`

function LoginPage() {
	return (
		<LoginWrapper className="container mt-5">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-header text-center">
							<h2>Записки Семинариста</h2>
							<small>Добро пожаловать, Братья!</small>
						</div>
						<div className="card-body">
							<form
								action="content.html"
								method="get"
							>
								<div className="form-group">
									<label htmlFor="username">Раб Божий:</label>
									<input
										type="text"
										className="form-control"
										id="username"
										name="username"
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="password">Пароль:</label>
									<input
										type="password"
										className="form-control"
										id="password"
										name="password"
										required
									/>
								</div>
								<button
									type="submit"
									className="btn btn-primary btn-block"
								>
									Вход
								</button>
							</form>
						</div>
						<div className="card-footer text-center">
							<small>
								Не зарегистрированы? <a href="/sign-up">Регистрация!</a>
							</small>
						</div>
					</div>
				</div>
			</div>
		</LoginWrapper>
	)
}

export default LoginPage
