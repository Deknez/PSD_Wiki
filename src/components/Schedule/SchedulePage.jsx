import styled from 'styled-components'

const ScheduleWrapper = styled.div`
	.schedule-day {
		margin-bottom: 30px;
	}

	.schedule-day h3 {
		font-weight: bold;
		background-color: rgba(255, 255, 255, 0.9);
		padding: 5px;
		text-align: center;
		border-radius: 10px;
	}

	.schedule-day ul {
		list-style-type: none;
		padding-left: 0;
	}

	.schedule-day li {
		padding: 5px;
		background-color: rgba(255, 255, 255, 0.8);
		margin-bottom: 5px;
		border-radius: 5px;
	}
`

function SchedulePage() {
	return (
		<ScheduleWrapper className="container mt-5">
			<h1 className="text-center mb-4 welcome-title">
				Расписание уроков для 1 курса
			</h1>
			<div className="col-md-10 offset-md-1">
				<div className="schedule-day">
					<h3 style={{ cursor: 'pointer' }}>Понедельник:</h3>
					<ul
						id="monday"
						className="collapse show"
					>
						<li>Российский (08:30 - 10:00)</li>
						<li>История Церкви (10:20 - 11:50)</li>
						<li>Устав Церковный (12:00 - 13:30)</li>
						<li>Обед</li>
						<li>Латинский (17:00 - 18:30)</li>
					</ul>
				</div>

				<div className="schedule-day">
					<h3 style={{ cursor: 'pointer' }}>Вторник:</h3>
					<ul
						id="tuesday"
						className="collapse"
					>
						<li>Спев (08:30 - 10:00)</li>
						<li>Педагогика (10:20 - 11:50)</li>
						<li>Российский (12:00 - 13:30)</li>
						<li>Обед</li>
						<li>Спевка (18:20 - 19:00)</li>
					</ul>
				</div>

				<div className="schedule-day">
					<h3 style={{ cursor: 'pointer' }}>Среда:</h3>
					<ul
						id="wednesday"
						className="collapse"
					>
						<li>Катехизис (08:30 - 10:00)</li>
						<li>Патрология (10:20 - 11:50)</li>
						<li>Церковнославянский (12:00 - 13:30)</li>
						<li>Обед</li>
						<li>Польский (14:00 - 16:00)</li>
						<li>Английский (17:30 - 19:00)</li>
					</ul>
				</div>

				<div className="schedule-day">
					<h3 style={{ cursor: 'pointer' }}>Четверг:</h3>
					<ul
						id="thursday"
						className="collapse"
					>
						<li>Духовность (08:30 - 10:00)</li>
						<li>Новый Завет (10:20 - 11:50)</li>
						<li>Психология (12:00 - 13:30)</li>
						<li>Обед</li>
						<li>Грецкий (14:00-15:30)</li>
					</ul>
				</div>

				<div className="schedule-day">
					<h3 style={{ cursor: 'pointer' }}>Пятница:</h3>
					<ul
						id="friday"
						className="collapse"
					>
						<li>Теология (08:30 - 10:00)</li>
						<li>Логика (10:20 - 11:50)</li>
						<li>Старый Завет (12:00 - 13:30)</li>
						<li>Обед</li>
						<li>Духовная Практика (14:00 - 15:30)</li>
					</ul>
				</div>
			</div>
			<a
				href="/dashboard"
				className="btn btn-secondary btn-block mt-4"
			>
				Вернуться
			</a>
		</ScheduleWrapper>
	)
}

export default SchedulePage
