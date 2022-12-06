class AppointmentFactory {
  Build(simpleAppointment) {
    var day = simpleAppointment.date.getDate() + 1; //retorna o dia certo porque o getDay retorna outra coisa, o +1 é porque a data ta meia noite ele pega o dia anterior
    var month = simpleAppointment.date.getMonth();
    var year = simpleAppointment.date.getFullYear();

    var hour = simpleAppointment.time.split(':')[0];
    var minutes = simpleAppointment.time.split(':')[1];

    var appo = {
      id: simpleAppointment._id,
      title: simpleAppointment.name + ' - ' + simpleAppointment.description,
      start: undefined,
      end: undefined,
    };
  }
}

module.exports = new AppointmentFactory();
