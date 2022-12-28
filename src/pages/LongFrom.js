import React, { useReducer } from 'react';

const LongForm = () => {

    const initialState = {
        fname: "",
        lname: "",
        quantity: 0,
        email: "",
        password: "",
        term: false
    }

    const reducer = (state, action) => {
        console.log(action)
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                };
            case "INCREMENT":
                return {
                    ...state,
                    quantity: state.quantity + 1
                }
            case "DECREMENT":
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            case "TOGGLE":
                return {
                    ...state,
                    term: !state.term
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const submit = (event) => {
        event.preventDefault();
        console.log(state);
    }



    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 justify-center  mx-auto   bg-gray-900  text-gray-100">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                <p className="text-sm  text-gray-400">Sign in to access your account</p>
            </div>
            <form
                onSubmit={submit}
                novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="fname" className="block mb-2 text-sm">First Name</label>
                        <input type="text" name="fname" id="email" placeholder="" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100"
                            onBlur={(e) =>
                                dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value },
                                })
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="lname" className="block mb-2 text-sm">Last Name</label>
                        <input type="text" name="lname" id="email" placeholder="" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100"
                            onBlur={(e) =>
                                dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value },
                                })
                            }
                        />
                    </div>
                    <div>
                        <button type="button" onClick={() => dispatch({ type: "INCREMENT" })} className="text-3xl mx-5">+</button>
                        <h1 className='text-3xl'>{state.quantity}</h1>
                        <button type="button" onClick={() => dispatch({ type: "DECREMENT" })} className=" text-3xl mx-5 ">-</button>
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100"
                            onBlur={(e) =>
                                dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value },
                                })
                            }
                        />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline  text-gray-400">Forgot password?</a>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md  border-gray-700  bg-gray-900  text-gray-100"
                            onBlur={(e) =>
                                dispatch({
                                    type: "INPUT",
                                    payload: { name: e.target.name, value: e.target.value },
                                })
                            }
                        />
                    </div>
                    <div>
                        <span>Accept our terms</span>
                        <input onClick={(e) =>
                            dispatch({
                                type: "TOGGLE",
                            })
                        } type="checkbox" className="toggle toggle-accent" name="term" unchecked />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button
                            type="submit"
                            disabled={!state.term}
                            className="w-full px-8 py-3 font-semibold rounded-md  bg-violet-400  text-gray-900">Submit</button>
                    </div>
                    <p className="px-6 text-sm text-center  text-gray-400">Don't have an account yet?
                        <a rel="noopener noreferrer" href="#" className="hover:underline  text-violet-400">Sign up</a>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LongForm;