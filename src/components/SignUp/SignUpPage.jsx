function SignUpPage() {
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<div className="card-body">
							<h2 className="card-title text-center">Регистрация</h2>
							<form
								action=""
								method="post"
							>
								<div className="form-group">
									<label htmlFor="username">Имя пользователя:</label>
									<input
										type="text"
										className="form-control"
										id="username"
										name="username"
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="email">Email:</label>
									<input
										type="email"
										className="form-control"
										id="email"
										name="email"
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
								<div className="form-group">
									<label htmlFor="confirm_password">Подтвердите пароль:</label>
									<input
										type="password"
										className="form-control"
										id="confirm_password"
										name="confirm_password"
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="access_code">Код доступа:</label>
									<input
										type="password"
										className="form-control"
										id="access_code"
										name="access_code"
										required
									/>
								</div>
								<button
									type="submit"
									className="btn btn-block"
								>
									Зарегистрироваться
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage
