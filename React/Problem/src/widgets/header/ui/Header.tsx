import joinIcon from '@/shared/assets/icons/smile.svg'
import AnimatedElement from '@/shared/ui/AnimatedElement/AnimatedElement'
import '@/widgets/header/ui/Header.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='header'>
      <div className='nav'>
        <div className='nav__center'>
          <div className='nav__center_desktop'>
            <AnimatedElement as='div' className='header'>
              <a href='#about' className='animate__animated anim-no-hide'>
                О проекте
              </a>
            </AnimatedElement>
            <a href='#reputation' className='animate__animated anim-no-hide'>
              Преимущества
            </a>
          </div>
          <div className='nav__right'>
            <a
              href='./sign-in.html'
              className='nav__login animate__animated anim-no-hide'
            >
              <span>Войти</span>
            </a>
          </div>
        </div>
        <div className='nav__container_login'>
          <a
            href='./registration.html'
            className='nav__join_desktop animate__animated anim-no-hide'
          >
            <Image src={joinIcon} alt='smile-icon' width={17} height={21} />
            Присоединиться
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
