class AppointmentFactory {
  Build(simpleAppointment) {
    var day = simpleAppointment.date.getDate() + 1; //retorna o dia certo porque o getDay retorna outra coisa, o +1 é porque a data ta meia noite ele pega o dia anterior
    var month = simpleAppointment.date.getMonth();
    var year = simpleAppointment.date.getFullYear();
    //split - separador posição antes e depois dos :
    var hour = simpleAppointment.time.split(':')[0];
    var minutes = simpleAppointment.time.split(':')[1];

    var startDate = new Date(year, month, day, hour, minutes, 0, 0);
    //time zone
    // startDate.setHours(startDate.getHours() - 3);
    var appo = {
      id: simpleAppointment._id,
      title: simpleAppointment.name + ' - ' + simpleAppointment.description,
      start: startDate,
      end: startDate,
      notified: simpleAppointment.notified,
      email: simpleAppointment.email,
    };
    return appo;
  }
}

module.exports = new AppointmentFactory();
