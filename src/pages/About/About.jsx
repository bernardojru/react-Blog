import {AboutConst,Button} from './AboutStyle'

export function About() {
  return (
    <AboutConst>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no front-end e firebase no back-end</p>
      <Button to='/posts/create'>Criar</Button>
    </AboutConst>
  );
}
