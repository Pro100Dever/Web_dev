import { db } from './db.js'

const setup = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL
    )
  `

  db.query(query, (err, result) => {
    if (err) {
      console.error('❌ Ошибка при создании таблицы:', err.message)
    } else {
      console.log('✅ Таблица "products" успешно создана')
    }
    db.end() // Закрыть соединение после выполнения
  })
}

setup()
