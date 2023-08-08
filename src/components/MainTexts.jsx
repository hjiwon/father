import { useRef, useEffect } from "react";

const MainTexts = () => {

  const observer = useRef (new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          if(entry.target.classList.contains('animate-left')) {
            entry.target.classList.add('animate-left-active')
          } else if(entry.target.classList.contains('animate-right')) {
            entry.target.classList.add('animate-right-active')
          }

          observer.unobserve(entry.target)
        }
      })
    })
  );

  useEffect(() => {
    const elementsLeft = document.querySelectorAll('.animate-left');
    elementsLeft.forEach(el => {
      observer.current.observe(el)
    })

    const elementsRight = document.querySelectorAll('.animate-right');
    elementsRight.forEach(el => {
      observer.current.observe(el)
    })
  }, []);


  return(
    <div className="h-240 text-stone-950 relative">
      <span className="absolute left-24 text-xl leading-snug animate-left">
        세계보건기구(WHO)에서는 건강을 <br /> <span className='text-3xl'>사회적 육체적 정신적</span><br />으로 완전히 안녕한 상태에 놓여있는 것이라고 정의합니다.
      </span>

      <span className="absolute right-20 top-56 text-xl leading-snug animate-right">
        <span className="text-3xl"><span className="text-green-600">사</span><span className="text-purple-600">육</span><span className="text-red-600">신</span></span> 건강지킴이 연구소에서는 <br />
        건강의 안녕을 위해 상담 및 연구 하고 있습니다.<br /> <br />

        우리는 빠르게 변화하는 시장에서, <br />
        차별화된 경쟁력을 갖춘 봉담만의 브랜드를 만들어가고 있습니다. <br />
      </span>


      <span className="absolute left-24 top-128 text-xl leading-snug animate-left">
        이전과 같은 방식으로는 더 이상 성장할 수 없습니다. <br />
        봉담은 새로운 시장과 기술을 창조하여 <br />
        더욱 더 성장할 것입니다. <br /> <br />

        봉담은 끊임없이 변화하는 기업이며, <br />
        미래를 준비하는 기업임을 약속드리고자, 더 많은 투자를 하고 있습니다. <br />

      </span>
    </div>
  )
}

export default MainTexts