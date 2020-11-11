import styles from './about.module.scss';
import { ForwardRefExoticComponent, forwardRef, RefAttributes } from 'react';

const About: ForwardRefExoticComponent<RefAttributes<HTMLElement>> = forwardRef<
  HTMLElement,
  unknown
>((props, aboutSectionRef) => {
  return (
    <section className={styles.about} ref={aboutSectionRef}>
      <section className={styles.introSection}>
        <div className={styles.intro}>
          <div className={`container ${styles.textPane}`}>
            <h1>About Barberus.</h1>
            <div className={styles.text}>
              Our mission is to link barbers and customers in an efficient, effective, and organized
              way to provide the best possible experience for both parties. We find power in getting
              a cut and giving a cut anytime you want. The days of waiting for hours to get your
              hair cut are over.
            </div>
          </div>
          <div className={styles.imagePane}></div>
        </div>
      </section>
      <section className={styles.clientSection}>
        <div className={styles.clients}>
          <h1 className={styles.sectionHeading}>Clients</h1>
          <div className={`${styles.sectionRow} ${styles.row1}`}>
            <div className={styles.textPane}>
              <h1>Let your barber come to you.</h1>
              <div className={styles.text}>
                We all have busy schedules and sometimes we simply cannot fit in those extra couple
                of miles. This is where our barber dispatch service comes in handy. Have a barber
                come directly to you and perform all your grooming needs from the comfort of your
                own home.
              </div>
            </div>
            <div className={styles.imagePane}></div>
          </div>
          <div className={`${styles.sectionRow} ${styles.row2}`}>
            <div className={styles.textPane}>
              <h1>Notifications.</h1>
              <div className={styles.text}>
                Never miss an appointment with our built in notification system. Make getting your
                grooming done a regular thing. Receive notifications on your google calendar.
              </div>
            </div>
            <div className={styles.imagePane}></div>
          </div>
        </div>
      </section>
      <section className={styles.barberSection}>
        <div className={styles.barbers}>
          <h1 className={styles.sectionHeading}>Barbers</h1>
          <div className={`${styles.sectionRow} ${styles.row1}`}>
            <div className={styles.textPane}>
              <h1>Intuitive Scheduling.</h1>
              <div className={styles.text}>
                Barbers and stylists need to stay organized. Get the best buck for your bang by
                making sure your schedule is tightly packed with clients.
              </div>
            </div>
            <div className={styles.imagePane}></div>
          </div>
          <div className={`${styles.sectionRow} ${styles.row2}`}>
            <div className={styles.textPane}>
              <h1>Charge your own rate.</h1>
              <div className={styles.text}>
                Think your skills and services are worth a lot? Set your own rate and get paid what
                you deserve.
              </div>
            </div>
            <div className={styles.imagePane}></div>
          </div>
          <div className={`${styles.sectionRow} ${styles.row3}`}>
            <div className={styles.textPane}>
              <h1>Showcase your work.</h1>
              <div className={styles.text}>
                Show everyone what you can do. We allow you to integrate your instagram profile into
                your barber profile so everybody can see your beautiful work and you can make
                yourself visible. Up and coming beauty-specialists, look no further.
              </div>
            </div>
            <div className={styles.imagePane}></div>
          </div>
        </div>
      </section>
    </section>
  );
});

About.displayName = 'About Section Component';

export default About;
