import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (


        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >

            <h3 className={styles.subtitulo}>
                Olá, eu sou o Julio Cezar
            </h3>

            <img
                src={fotoSobreMim}
                alt="foto JC"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Teste de texto
            </p>

        </PostModelo>



    )
}