import {Component} from "react";
import axios from "axios";

interface UserProps {
    data:any;
}

interface UserState {
    user_id: string;
    email: string;
    givenName: string;
    middleName: string;
    name: string;
    familyName: string;
    nickName: string;
    phoneNumber: string;
    comment: string;
    picture: string;
}

export class UserForm extends Component<UserProps,UserState> {

    private api : any;

    constructor(props: any) {
        super(props);
        this.api = axios.create({baseURL: `http://localhost:4000`});
        this.state = {
            user_id: "",
            email: "",
            givenName: "",
            middleName: "",
            name: "",
            familyName: "",
            nickName: "",
            phoneNumber: "",
            comment: "",
            picture: ""
        }
        this.handleMessageInputOnChange = this.handleMessageInputOnChange.bind(this);
    }
    render() {
        return (
            <div>
                <div className="flex justify-center pt-2 pb-20">
                    <div
                        className="bg-gray-100 w-[25em] h-full mt-14 rounded-lg text-center border-2">
                        <h1 className="text-4xl font-bold text-gray-200 bg-blue-400 pt-4 pb-4 rounded-t-lg">User Form</h1>

                        <form className="">
                            <div className="w-11/12 ml-5">

                                <div className="text-start ml-5">
                                    <div className="mt-5">
                                        <label className="text-xs font-bold">User_ID</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="text"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Email</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>


                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Given Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-password" type="text"/>
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Middle Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Family Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Nick Name</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Phone Number</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Comment</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="email"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>

                                    <div className="mt-5">
                                        <label className="text-xs font-bold">Picture</label>
                                        <input
                                            className="appearance-none rounded w-11/12 outline-gray-800
                                            focus:outline-blue-400 text-[16px] p-2 border-2 border-gray-300"
                                            id="inline-full-name" type="file"
                                            name={"username"}
                                            /*value={this.state.username}
                                            onChange={this.handleMessageInputOnChange}*/
                                        />
                                    </div>

                                </div>

                                <button
                                    className="shadow bg-blue-400 w-11/12 text-white hover:bg-blue-900 font-bold py-2 px-4 rounded
                                text-[16px] mt-5"
                                    type="button" /*onClick={this.checkAdmin}*/>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleMessageInputOnChange(event: { target: { value: any; name: any; } }) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // @ts-ignore
        this.setState({
            [name]: value
        });
    }


}