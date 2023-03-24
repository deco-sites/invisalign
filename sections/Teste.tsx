export interface iDados{
    title: string;
}

export default function Teste( {title}: iDados) {
  return (
    <div class="bg-gray-300">
        {title}
    </div>
  )
}
