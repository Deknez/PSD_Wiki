function DashboardPage() {
	return (
		<div className="container mt-5">
			<h1 className="text-center mb-4 welcome-title">
				Добро пожаловать в PSD Wiki
			</h1>
			<div className="row">
				<div className="col-md-10 offset-md-1">
					<div className="text-center">
						<a
							href="/schedule"
							className="special-link"
						>
							Расписание Уроков
						</a>
						<a
							href="/subjects"
							className="special-link ml-3"
						>
							Расписание Богослужений
						</a>
					</div>
					<h3 className="mt-3 lesson-title text-center">Уроки:</h3>
					<ul className="list-group mb-4">
						<li className="list-group-item">
							<a href="lessons/english.html">Английский</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/greek.html">Греческий</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/spiritual_practice.html">Духовная Практика</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/spirituality.html">Духовность</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/church_history.html">История Церкви</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/catechism.html">Катехизис</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/latin.html">Латынь</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/logic.html">Логика</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/new_testament.html">Новый Завет</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/patrology.html">Патрология</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/pedagogy.html">Педагогика</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/polish.html">Польский Язык</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/psychology.html">Психология</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/russian.html">Российский</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/old_testament.html">Старый Завет</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/theology.html">Теология</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/ustav_tserkovny.html">Устав Церковный</a>
						</li>
						<li className="list-group-item">
							<a href="lessons/church_slavonic.html">
								Церковно-Словянский Язык
							</a>
						</li>
					</ul>
					<a
						href="/"
						className="btn btn-secondary btn-block mt-4"
					>
						Выйти
					</a>
				</div>
			</div>
		</div>
	)
}

export default DashboardPage
