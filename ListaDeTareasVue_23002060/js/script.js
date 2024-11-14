const app1 = {
    data() {
        return {
            nuevaTarea: '',
            tareas: [],
            mensajeValidacion: 'Escribe una tarea con al menos 4 caracteres',
            claseValidacion: 'colorNegro',
        };
    },
    methods: {
        validarTarea() {
            if (this.nuevaTarea.length === 0) {
                this.mensajeValidacion = 'Escribe una tarea con al menos 4 caracteres';
                this.claseValidacion = 'colorNegro';
            } else if (this.nuevaTarea.length > 0 && this.nuevaTarea.length < 4) {
                this.mensajeValidacion = 'Tarea muy corta';
                this.claseValidacion = 'colorRojo';
            } else {
                this.mensajeValidacion = 'Tarea válida';
                this.claseValidacion = 'colorVerde';
            }
        },
        agregarTarea() {
            if (this.nuevaTarea.length >= 4) {
                this.tareas.push({ texto: this.nuevaTarea, completada: false });
                this.nuevaTarea = '';
                this.mensajeValidacion = 'Tarea añadida correctamente';
                this.claseValidacion = 'colorVerde';
            }
        },
        quitarTarea(index) {
            this.tareas.splice(index, 1);
            this.mensajeValidacion = 'Tarea eliminada correctamente';
            this.claseValidacion = 'colorVerde';
        },
        alternarEstadoTarea(index) {
            this.tareas[index].completada = !this.tareas[index].completada;
        }
    },
    computed: {
        porcentajeCompletado() {
            const tareasCompletadas = this.tareas.filter(tarea => tarea.completada).length;
            return this.tareas.length > 0 
                ? Math.round((tareasCompletadas / this.tareas.length) * 100) 
                : 0;
        },
        contadorTareasCompletadas() {
            return this.tareas.filter(tarea => tarea.completada).length;
        },
        barraClase() {
            const porcentaje = this.porcentajeCompletado;
            if (porcentaje < 40) return 'bajo';
            if (porcentaje < 75) return 'medio';
            return 'alto';
        }
    }
};

Vue.createApp(app1).mount('#app');
