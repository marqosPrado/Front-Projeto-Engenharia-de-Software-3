import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '@/styles/components/livro/Form.module.css'

export default function GrupoDePrecificacao() {
    const [grupo, setGrupo] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/grupoDePrecificacao')
                setGrupo(response.data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, []);

    return (
        <>
        </>
    );
}