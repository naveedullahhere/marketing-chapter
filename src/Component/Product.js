import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { toast } from 'react-hot-toast';

var items = [
    {
        id: 1,
        title: "Web Rent",
        img: "https://static.wixstatic.com/media/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg/v1/fill/w_640,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg",
        desc: "Rent a fully customizable website with an easy-to-use interface for managing content and personalizing design.",
        price: 230.99,
    },
    {
        id: 2,
        title: "Quick Order ",
        img: "https://whatsorder.com/assets/wo-hero-img.png",
        desc: "Sell directly to customers via a WhatsApp-based online store platform.",
        price: 230.99,
    },
    {
        id: 3,
        title: "WhatBot",
        img: "https://blog.sirena.app/hubfs/Co%CC%81mo%20crear%20un%20bot%20para%20WhatsApp%20(1)-png.png",
        desc: "Automate customer interactions with chatbots for tasks such as appointment booking, FAQ answering, and recommendations.",
        price: 230.99,
    },
]


export const Product = () => {
    const { dispatch, URL, cartItems, setCartItems } = useContext(AppContext);
    const [currentProduct, setCurrentProduct] = useState('');
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();


    const addToCart = (item) => {
        dispatch(setCartItems(item));
        console.log(cartItems);
    }


    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be ${min}',
        },
    };



    const showModal = (item) => {
        setOpen(true);
        setCurrentProduct(item);
    };

    const handleOk = () => {

        setConfirmLoading(true);
        form
            .validateFields()
            .then((values) => {
                onCreate(values);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
                setConfirmLoading(false);
            });
    };

    const onFinish = (values) => {
        console.log(values);
    };


    const onCreate = (data) => {
        console.log(data);
        fetch(`${URL}api/contact-post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(res => res.json())
            .then(json => {
                form.resetFields();
                console.log(json);
                if (json.success) {
                    setConfirmLoading(false);
                    toast.success(json.message);
                }

            }).catch(err => {
                setConfirmLoading(false);
                toast.error("something went wrong!");
            })
    };

    return (
        <>
            <div className='sec padding-block-0'></div>
            <Modal

                title="Inquiry Now"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}

                okText="Create"
                cancelText="Cancel"
                onCancel={() => setOpen(false)}

            >
                <Form
                    form={form}
                    name="form_in_modal"
                    onFinish={onFinish}
                    initialValues={{ modifier: 'public' }}
                    layout={'vertical'}

                    style={{ maxWidth: "100%", marginTop: 18 }}
                    validateMessages={validateMessages}
                >
                    <Form.Item name={['domain']} label="domain" style={{ display: "none" }} initialValue={window.location.href} >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user_id']} label="user_id" style={{ display: "none" }} initialValue={null} >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['page_name']} label="page_name" style={{ display: "none" }} initialValue={document.title.split("-")[1]} >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['inquiry_about']} label="package_name" style={{ display: "none" }} initialValue={currentProduct} >
                        <Input />
                    </Form.Item>


                    <Form.Item name={['name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['email']} label="Email" rules={[{ type: 'email', required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['number']} label="Number" rules={[{ type: 'number', min: 6, required: true }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['message']} label="Message">
                        <Input.TextArea />
                    </Form.Item>
                </Form >
            </Modal >
            < div className='sec' >
                <div class="container">
                    <div className="row">
                        <div className="col-md-12 mx-auto mb-4">
                            <h2 className="heading fs-2 p-0 m-0 ">
                                Our Products
                            </h2>
                            <p className="para-sm text-muted">
                                We empower your digital growth with our products. Enhance your online presence and drive sales with ease, explore our offerings below.
                            </p>
                        </div>
                        {
                            items.map((item) => {
                                return <div className="col-lg-4 col-md-4 col-12 my-3" key={item.id}>
                                    <div class="product-card">
                                        <div class="product-tumb">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div class="product-details d-flex flex-column justify-content-between">
                                            <div>

                                                <h4><a href="">{item.title}</a></h4>
                                                <p>{item.desc}</p>
                                            </div>
                                            <div class="product-bottom-details d-flex align-items-center justify-content-end">
                                                {/* <div class="product-price"><small>$96.00</small>${item.price}</div> */}
                                                <div class="product-links">
                                                    {/* <a onClick={() => addToCart(item)}><i class="fa fa-shopping-cart"></i></a> */}
                                                    <button className="py-2 btn btn-main" onClick={() => showModal(item.title)}>
                                                        Inquiry Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

            </ div>

        </>
    )
}
