import Header from '@/widgets/header'

export default function Home() {
  console.log('SSR рендеринг страницы')
  return (
    <div>
      <Header />
      <main></main>
    </div>
  )
}
