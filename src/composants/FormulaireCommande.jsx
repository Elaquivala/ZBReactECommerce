import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom"
export const FormulaireCommande = () => {
    const navigate = useNavigate()

    const [form,setForm] = useState({nom:"",email:"",adresse:"",commentaire:""})
    function handleChange(e) {
        const {name,value} = e.target;
        setForm({...form, [name]: value})
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit bouton appuyé ! ")
        if(form.login != "" && form.password != "" && form.adresse != "") {
           localStorage.setItem("client",JSON.stringify({nom:form.nom,email:form.email,adresse:form.adresse,commentaire:form.commentaire}))
           console.log(localStorage.getItem("client"))
            navigate('/boncde')
        }
    }
    return <div class="row">
        <h2>Votre profil</h2>
        <form>
            <label htmlFor="nom">Votre nom : </label>
            <input type="text" className="form-control form-padd" name="nom" value={form.nom} onChange={handleChange} placeholder="Nom"></input>
            <label htmlFor="email">Votre email : </label>
            <input type="text" className="form-control form-padd" name="email" value={form.email} onChange={handleChange} placeholder="exemple@domaine.com"></input>
            <label htmlFor="email">Votre adresse complète : </label>
            <input type="text" className="form-control form-padd" name="adresse" value={form.adresse} onChange={handleChange} placeholder="Votre rue / Code postal / Ville "></input>
            <label htmlFor="email">Vos commentaires : </label>
            <textarea id="" cols="30" rows="10" className="form-control form-padd" name="commentaire" onChange={handleChange} value={form.commentaire} placeholder="Commentaire..."></textarea>
            <button type="submit" className="btn btn-primary form-padd" onClick={handleSubmit}>Commander</button>
        </form>
        
    </div>
}