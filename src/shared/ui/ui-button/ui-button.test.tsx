import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { UiButton } from './ui-button'
import styles from './ui-button.module.scss'

describe('UiButton', () => {
	test('должен отрендерить кнопку и класс', () => {
		render(<UiButton>Кнопка</UiButton>)

		const buttonElement = screen.getByText(/Кнопка/i)
		expect(buttonElement).toBeInTheDocument()
		expect(buttonElement).toHaveClass(styles.button)
	})
})
