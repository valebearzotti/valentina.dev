import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="display">welcome :&#41;</h1>
      <p className="body">
        i&apos;m valentina (<i>but people call me val</i>), a software developer
        based in argentina. life consists of coding on a daily basis and
        occasionally playing piano. i intend this to be a space where i share my
        projects but also thoughts and ideas which may not be relevant to my
        professional work necessarily.
      </p>
      <p className="body">
        check out the <Link href="/changelog">changelog</Link> to see
        what&apos;s new.
      </p>
    </>
  );
}
