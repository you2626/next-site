import Head from "next/head";


export default function Home(){
  let title="あいうえお"
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <h1>{title}</h1>
    <p>学ぶ。をちゃんと</p>
    </>
  )
}