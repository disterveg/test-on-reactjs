import React, {Component} from 'react';
import './QuizCreator.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Select from '../../components/UI/Select/Select';
import {createControl} from '../../form/formFramework';

function createOptionControl(number) {
    return createControl({
        label: `Вариант${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number
    }, {required: true});
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            formControls: createFormControls()
        };

        this.submitHandler = this.submitHandler.bind(this);
    };

    submitHandler(event) {
        event.preventDefault();
    };

    onAddQuestionHandler() {

    }

    createQuizHandler() {
        
    }

    changeHandler() {}

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
                <React.Fragment key={index}>
                <Input
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                />
                {index === 0 ? <hr /> : null}
                </React.Fragment>
            );
        });
    }

    render() {
        return (
            <div className="QuizCreator">
                <div>
                    <h1>Создание теста</h1>

                    <form onSubmit={this.submitHandler}>
                        {this.renderControls()}

                        <Select
                            key={'1'}
                            value=""
                            view="has-search"
                            isMulti="false"
                            label="Выберите регион"
                            notFoundmMsg="Нет совпадений"
                            items={[
                                {ID: "103", NAME: "Алтайский край"},
                                {ID: "104", NAME: "Краснодарский край"},
                                {ID: "105", NAME: "Республика Адыгея (Адыгея)"},
                                {ID: "106", NAME: "Красноярский край"},
                                {ID: "107", NAME: "Республика Хакасия"},
                                {ID: "108", NAME: "Таймырский (Долгано-Ненецкий) автономный округ"},
                                {ID: "109", NAME: "Эвенкийский автономный округ"},
                                {ID: "110", NAME: "Приморский край"},
                                {ID: "111", NAME: "Ставропольский край"},
                                {ID: "112", NAME: "Карачаево-Черкесская Республика"},
                                {ID: "113", NAME: "Хабаровский край"},
                                {ID: "114", NAME: "Еврейская автономная область"},
                                {ID: "115", NAME: "Амурская область"},
                                {ID: "116", NAME: "Архангельская область"},
                                {ID: "117", NAME: "Ненецкий автономный округ"},
                                {ID: "118", NAME: "Астраханская область"},
                                {ID: "119", NAME: "Белгородская область"},
                                {ID: "120", NAME: "Брянская область"},
                                {ID: "121", NAME: "Владимирская область"},
                                {ID: "122", NAME: "Волгоградская область"},
                                {ID: "123", NAME: "Вологодская область"},
                                {ID: "124", NAME: "Воронежская область"},
                                {ID: "125", NAME: "Нижегородская область"},
                                {ID: "126", NAME: "Ивановская область"},
                                {ID: "127", NAME: "Иркутская область"},
                                {ID: "128", NAME: "Калининградская область"},
                                {ID: "129", NAME: "Тверская область"},
                                {ID: "130", NAME: "Калужская область"},
                                {ID: "131", NAME: "Камчатская область"},
                                {ID: "132", NAME: "Корякский автономный округ"},
                                {ID: "133", NAME: "Кемеровская область"},
                                {ID: "134", NAME: "Кировская область"},
                                {ID: "135", NAME: "Костромская область"},
                                {ID: "136", NAME: "Самарская область"},
                                {ID: "137", NAME: "Курганская область"},
                                {ID: "138", NAME: "Курская область"},
                                {ID: "139", NAME: "Ленинградская область"},
                                {ID: "140", NAME: "Липецкая область"},
                                {ID: "141", NAME: "Магаданская область"},
                                {ID: "142", NAME: "Чукотский автономный округ"},
                                {ID: "143", NAME: "Московская область"},
                                {ID: "144", NAME: "Мурманская область"},
                                {ID: "145", NAME: "Новгородская область"},
                                {ID: "146", NAME: "Новосибирская область"},
                                {ID: "147", NAME: "Омская область"},
                                {ID: "148", NAME: "Оренбургская область"},
                                {ID: "149", NAME: "Орловская область"},
                                {ID: "150", NAME: "Пензенская область"},
                                {ID: "151", NAME: "Пермская область"},
                                {ID: "152", NAME: "Псковская область"},
                                {ID: "153", NAME: "Ростовская область"},
                                {ID: "154", NAME: "Рязанская область"},
                                {ID: "155", NAME: "Cаратовская область"},
                                {ID: "156", NAME: "Сахалинская область"},
                                {ID: "157", NAME: "Свердловская область"},
                                {ID: "158", NAME: "Смоленская область"},
                                {ID: "159", NAME: "Тамбовская область"},
                                {ID: "160", NAME: "Томская область"},
                                {ID: "161", NAME: "Тульская область"},
                                {ID: "162", NAME: "Тюменская область"},
                                {ID: "163", NAME: "Ульяновская область"},
                                {ID: "164", NAME: "Челябинская область"},
                                {ID: "165", NAME: "Ярославская область"},
                                {ID: "166", NAME: "Республика Башкортостан"},
                                {ID: "167", NAME: "Республика Бурятия"},
                                {ID: "168", NAME: "Республика Дагестан"},
                                {ID: "169", NAME: "Кабардино-Балкарская Республика"},
                                {ID: "170", NAME: "Республика Калмыкия"},
                                {ID: "171", NAME: "Республика Карелия"},
                                {ID: "172", NAME: "Республика Коми"},
                                {ID: "173", NAME: "Республика Марий Эл"},
                                {ID: "174", NAME: "Республика Мордовия"},
                                {ID: "175", NAME: "Республика Северная Осетия-Алания"},
                                {ID: "176", NAME: "Республика Татарстан (Татарстан)"},
                                {ID: "177", NAME: "Республика Тыва"},
                                {ID: "178", NAME: "Удмуртская Республика"},
                                {ID: "179", NAME: "Чеченская Республика"},
                                {ID: "180", NAME: "Чувашская Республика - Чувашия"},
                                {ID: "181", NAME: "Республика Саха (Якутия)"},
                                {ID: "182", NAME: "Республика Крым"},
                                {ID: "183", NAME: "Севастополь"},
                                {ID: "184", NAME: "Коми-Пермяцкий АО"}
                            ]}
                        />
                        <Button
                            type="primary"
                            onClick={this.onAddQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>

                        <Button
                            type="success"
                            onClick={this.createQuizHandler}
                        >
                            Создать тест
                        </Button>

                    </form>
                </div>
            </div>
        );
    }
}

export default QuizCreator;