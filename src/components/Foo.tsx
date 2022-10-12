import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useForm} from "react-hook-form";

{/* @ts-ignore */}
export const Foo = ({onCreateForm}) => {
    const [attr, setAttr] = useState("foo");
    const { control, register, handleSubmit } = useForm()

    const onSubmit = () => {
        if (!attr) {
            alert('Please enter a value')
        } else {
            onCreateForm({ attr })
        }
    }

    return (
        <>
            <h1>this is foo!</h1>
            <Link to='/'>back home</Link>
            <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label htmlFor="">Attr</label>
                    <input type="text" placeholder="foo" value={attr} onChange={(e)=>setAttr(e.target.value)}/>
                </div>
                {/* @ts-ignore */}
                <input className="btn btn-block" type="submit" value="Save" onClick={(e) => handleSubmit(e)} />
            </form>
        </>
    )
}