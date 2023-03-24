export interface Props{
    title: string;
}

export default function Teste( {title}: Props) {
  return (
    <div class="bg-gray-300">
        {title}
    </div>
  )
}
