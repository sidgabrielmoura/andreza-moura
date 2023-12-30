import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="w-full h-[100vh] bg-[#323232] flex flex-col items-center justify-center gap-6">
        
        <h1 className="text-[35px] text-zinc-200 font-extralight" id="nome-home">Andreza Moura</h1>
        <Link href={''} className="bg-[#deff16] w-[150px] h-[40px] rounded-full flex items-center justify-center" id="botao-navegar">Navegar</Link>
        
      </main>
    </>
  )
}
