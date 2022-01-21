import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaRegCalendarTimes } from 'react-icons/fa';

import { Container, Center, Time, DatepickerToggle, Info } from './styles';

function Schedule() {
    const [schedule, setSchedule] = useState([
        {
            time: '08:00h',
            past: true,
            appointment: {
                user: {
                    name: 'Douglas'
                }
            },
        },
        {
            time: '08:30h',
            past: true,
            appointment: {
                user: {
                    name: 'Ewerson'
                }
            },
        },
        {
            time: '09:00h',
            past: true,
            appointment: {
                user: {
                    name: 'Teco'
                }
            },
        },
        {
            time: '09:30h',
            past: false,
            appointment: {
                user: {
                    name: 'Magno'
                }
            },
        },
        {
            time: '10:00h',
            past: false
        },
        {
          time: '10:30h',
          past: false
      },
      {
        time: '11:00h',
        past: false
      },
      {
        time: '11:30h',
        past: false
      },
      {
        time: '12:00h',
        past: false
      },
      {
        time: '12:30h',
        past: false
      },
      {
        time: '13:00h',
        past: false
      },
      {
        time: '13:30h',
        past: false
      },
      {
        time: '14:00h',
        past: false
      },
      {
        time: '14:30h',
        past: false
      },
      {
        time: '15:00h',
        past: false
      },
      {
        time: '15:30h',
        past: false
      },
      {
        time: '16:00h',
        past: false
      },
      {
        time: '16:30h',
        past: false
      },
      {
        time: '17:00h',
        past: false,
        appointment: {
            user: {
                name: 'David'
            }
        },
      },
      {
        time: '17:30h',
        past: false
      },
      {
        time: '18:00h',
        past: false,
        appointment: {
            user: {
                name: 'Carlos'
            }
        },
      },
      {
        time: '18:30h',
        past: false
      },
      {
        time: '19:00h',
        past: false
      }
    ]);
    // const [date, setDate] = useState(new Date());
  
    // const dateFormatted = useMemo(() => format(date, 'MMMM d', { locale: en }), [
    //   date,
    // ]);
  
    // useEffect(() => {
    //   async function loadSchedule() {
    //     const response = await api.get('schedule', {
    //       params: { date },
    //     });
  
    //     const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    //     const data = range.map(hour => {
    //       const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
    //       const compareDate = utcToZonedTime(checkDate, timezone);
  
    //       return {
    //         time: `${hour}:00h`,
    //         past: isBefore(compareDate, new Date()),
    //         appointment: response.data.appointments.find(a =>
    //           isEqual(parseISO(a.date), compareDate)
    //         ),
    //       };
    //     });
  
    //     setSchedule(data);
    //   }
  
    //   loadSchedule();
    // }, [date]);
  
    // function handlePrevDay() {
    //   setDate(subDays(date, 1));
    // }
  
    // function handleNextDay() {
    //   setDate(addDays(date, 1));
    // }

    function handleCancel() {
      if (window.confirm("Deseja realmente cancelar este agendamento? A ação não pode ser desfeita.") == true) {
        console.log('ok');
      } else {
        console.log('not ok');
      }
    }
  
    return (
      <Container>
        <Center>
          <header>
            <button type="button" onClick={() => {}}>
              <FaChevronLeft size={36} color="#ff7b00" />
            </button>
            <strong>21 de Janeiro</strong>
            <button type="button" onClick={() => {}}>
              <FaChevronRight size={36} color="#ff7b00" />
            </button>
            <DatepickerToggle>
                <span>
                  <FaCalendarAlt size={24} color="#ff7b00" />
                </span>
                <input type="date" />
            </DatepickerToggle>
          </header>
    
          <ul>
            {schedule.map(time => (
              <Time key={time.time} past={time.past} available={!time.appointment}>
                <Info past={time.past} available={!time.appointment}>
                  <strong>{time.time}</strong>
                  <span>
                    {time.appointment && time.appointment.user && time.appointment.user.name ? time.appointment.user.name : 'Disponível'}
                  </span>
                </Info>
                <FaRegCalendarTimes size={18} color="red" onClick={() => handleCancel()} />
              </Time>
            ))}
          </ul>
        </Center>
      </Container>
    );
  }

export default Schedule;
