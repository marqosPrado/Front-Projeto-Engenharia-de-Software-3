import styles from '@/styles/components/livro/Form.module.css'

export default function Formulario() {
    return (
        <div>
            <form action="" className={styles.form}>
                <div className={styles.containerInput}>
                    <div className={styles.text}>
                        <p>Titulo *</p>
                    </div>
                    <div className={styles.input}>
                        <input type="text" placeholder="Insira o titulo do livro"/>
                    </div>
                </div>

                <div className={styles.containerInput}>
                    <div className={styles.text}>
                        <p>Autor *</p>
                    </div>
                    <div className={styles.input}>
                        <input type="text" placeholder="Insira o autor do livro" />
                    </div>
                </div>

                <div className={styles.containerInput}>
                    <div className={styles.text}>
                        <p>Editora *</p>
                    </div>
                    <div className={styles.input}>
                        <input type="text" placeholder="Insira a editora do livro" />
                    </div>
                </div>

                <div className={styles.containerInput}>
                    <div className={styles.text}>
                        <p>Sinopse *</p>
                    </div>
                    <div className={styles.input}>
                        <textarea cols={50} rows={5} maxLength={500}></textarea>
                    </div>
                </div>

                <div className={styles.containerGrid}>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Ano *</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="date" />
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Categoria *</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <select name="category_id">
                                    <option disabled>Selecione a categoria</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>ISBN *</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="text" placeholder="Insira o ISBN do livro" />
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Número de páginas *</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="number" placeholder="Ex: 169" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Altura (cm)*</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="text" placeholder="Ex: 15.0" />
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Largura (cm)*</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="text" placeholder="Ex: 10.0" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.containerGrid}>
                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Peso (g) *</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="text"  placeholder='Ex: 182.7'/>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Profundidade *</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="text" placeholder='Ex: 90.0' />
                            </div>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Código de barras *</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="text"  placeholder='Ex: 182.7'/>
                            </div>
                        </div>

                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Quantidade *</p>
                            </div>
                            <div className={styles.inputGrid}>
                                <input type="number" placeholder='Ex: 10' />
                            </div>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.item}>
                            <div className={styles.itemText}>
                                <p>Valor de aquisição *</p>
                            </div>
                        
                            <div className={styles.inputGrid}>
                                <input type="text"  placeholder='Ex: 182.7'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <input type="submit" value="Salvar" className={styles.button} />
                </div>
            </form>
        </div>
    );
}