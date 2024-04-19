import { redirect } from "next/dist/server/api-utils";

export default async function AddEventPage() {
    async function submit(formData) {
        "use server"
        let headersList = {
            "Accept": "*/*",
            "apikey": process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            "Prefer": "return=representation",
            "Content-Type": "application/json"
           }

        let bodyContent = JSON.stringify({
            name: formData.get("name"),
            when: formData.get("when"),
            description: formData.get("description"),

           });
           
        let response = await fetch("https://kwqvmlkbcslmysvtosts.supabase.co/rest/v1/name?id=eq.22", { 
             method: "POST",
             body: bodyContent,
             headers: headersList
           });
           
        let data = await response.text();
        const id = data[0].id;
        redirect("/event/" + id);
    }
  return (
    <form className="text-xl px-5 py-5 gap-y-5" action={submit}>
        <div className="formcontrol">
            <label htmlFor="form_name">Title</label>
            <input id="form_name" type="text" name="name" />
        </div>
        <div className="formcontrol">
            <label htmlFor="form_when">Hvornår</label>
            <input id="form_when" type="date" name="when" />
        </div>
        <div className="formcontrol">
            <label htmlFor="description">Andet du vil sige</label>
            <input id="form_description" type="text" name="description" />
        </div>
        <button className="">Gem</button>
    </form>
  )
}
