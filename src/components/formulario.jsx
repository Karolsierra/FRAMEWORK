import { useForm } from "react-hook-form";

const formulario = () => {

    const { register, handleSubmit } = useForm;

    const onSubmit = (data) => {
        console.log(data);
}

    return <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre:</label>
                <input type="text" name=""/>
            </div>
            <div>
                <label>Direccion:</label>
                <input type="email" name="" />
            </div>
            <div>
                <label>Edad:</label>
                <input type="tel" name="" />
            </div>
            <div>
                <label>Nacionalidad: </label>
                <select>
                    <option value="nu">Seleccione una nacionalidad...</option>
                    <option value="co">Cololmbiana</option>
                    <option value="eu">Estadounidense</option>
                    <option value="es">Española</option>
                    <option value="al">Alemana</option>
                    <option value="it">Italiana</option>
                </select>
            </div>
            <input type="submit" value="ENVIAR"></input>
        </form>
    </div>
}

export default formulario;

