import styles from './about.module.scss';

const About = () => {
  return (
    <section className={styles.about}>
      <section className={styles.introSection}>
        <div className={styles.intro}>
          <div className={`container ${styles.introPane}`}>
            <h1>About Barberus</h1>
            <div className={styles.text}>Our mission is to link barbers and customers
            in an efficient, effective, and organized way to provide the best
            possible experience for both parties. We find power in getting
            a cut and giving a cut anytime you want. The days of waiting for hours
            to get your hair cut are over.</div>
          </div>
          <div className={styles.introImage}></div>
        </div>
      </section>
      <section className={styles.clientSection}>
        <div className={styles.clients}>
          <h1>Clients</h1>
          <div className={`${styles.clientPane} -right`}>
            <h2>Have your barber come to you.</h2>
            <div className={styles.text}>We all have busy schedules and sometimes we simply cannot fit in those extra couple of miles.
            This is where our barber dispatch service comes in handy. Have a barber come directly to you
            and perform all your grooming needs from the comfort of your own home.
            </div>
          </div>
          <div className={`${styles.clientPane} -left`}>
            <h2>Notifications</h2>
            <div className={styles.text}>Never miss an appointment with our built in notification system.
            Make getting your grooming done a regular thing. Receive notifications on your google calendar.
            </div>
          </div>
        </div>
      </section>
      <section className={styles.barberSection}>
        <div className="container">
          <div className={styles.barbers}>
            <h1>Barbers</h1>
            <h2>Intuitive Scheduling</h2>
            <div className={styles.text}>Barbers and stylists need to stay organized. Get the best buck for your bang by making sure your
            schedule is tightly packed with clients.
            </div>
            <h2>Charge your own rate</h2>
            <div className={styles.text}>Think your skills and services are worth a lot? Set your own rate and get paid what you deserve.</div>
            <h2>Showcase your work</h2>
            <div className={styles.text}>Show everyone what you can do. We allow you to integrate
            your instagram profile into your barber profile so everybody can see your beautiful work and
            you can make yourself visible. Up and coming beauty-specialists, look no further.
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
