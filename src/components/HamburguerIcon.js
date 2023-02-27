import IconHamburguer from "../../public/svgComponents/Hamburguer";

const HamburguerIcon = ({ onClick }) => {

  return (
    <button onClick={onClick}>
      <IconHamburguer />
    </button>
  )
}

export default HamburguerIcon
