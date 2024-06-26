
import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from '@/styles/pages/home';

import shirt1 from '@/assets/Shirt/1.png'
import shirt2 from '@/assets/Shirt/2.png'
import shirt3 from '@/assets/Shirt/3.png'
import shirt4 from '@/assets/Shirt/4.png'

import 'keen-slider/keen-slider.min.css'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <pre>{JSON.stringify(props.list)}</pre>
      <Product className='keen-slider__slide'>
        <Image src={shirt1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={shirt2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={shirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={shirt4} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta W</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return {
    props: {
      list: [1, 2, 3]
    },
  }
}