import Link from 'next/link'
import '../globals.css'
export default function inicialPage(){
    return(
        <>
            <main className="w-full h-[100vh]">
                <div className='bg-[url(../assets/fundoInicialPage.jpg)] bg-cover bg-center brightness-75 w-full h-full absolute -z-10'/>
                <nav className='w-full h-[30px] flex justify-between items-center px-[60px] py-[40px] bg-[#000000] rounded-b-full' id='navBar'>
                    <div className='w-[70px] h-[70px] flex items-center bg-[url(../assets/logo.jpg)] bg-center bg-cover rounded-full'/>
                    <div className='flex gap-8'>
                        <Link href={''} className='text-[#DAA520] font-medium text-[17px]' id='links'>Inicio</Link>
                        <Link href={''} className='text-[#DAA520] font-medium text-[17px]' id='links'>Catálogo</Link>
                        <Link href={''} className='text-[#DAA520] font-medium text-[17px]' id='links'>Contatos</Link>
                        <Link href={''} className='text-[#DAA520] font-medium text-[17px]' id='links'>Mensagem</Link>
                    </div>
                </nav>

                <div className='h-full w-full px-[200px] flex items-center'>
                    <h1 className='text-[28px] text-zinc-50 font-extralight capitalize' id='fraseInicialPage'>
                        Decorações sob medida <br /> para o <span className='text-[#deff16] font-black'>Seu Lar</span>.
                    </h1>
                </div>
            </main>
            <div className=''/>
        </>
    )
}