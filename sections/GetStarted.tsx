import { context } from "$live/live.ts";

export interface Props {
  enableInspectVSCode?: boolean;
}

export default function GetStarted({ enableInspectVSCode }: Props) {
  return (
    <section class="pt-20 pb-32">
      <h1>Aqui irá ser passado: </h1>
    </section>
  );
}
