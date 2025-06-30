import Button from "../components/Button"

export default function DownloadAppSection() {
    return <div className="flex relative flex-col-reverse items-center lg:items-start flex-wrap">
        <img
          alt="device image"
          width={343}
          height={168}
          loading="lazy"
          src={'/device-mobile.png'}
          className="static w-80 my-8 lg:hidden drop-shadow-custom"
        />
        <img
          alt="device image"
          width={1130}
          height={552}
          loading="lazy"
          src={'/device-desktop.png'}
          className="hidden lg:block lg:absolute lg:w-[600px] 2xl:w-[800px] -right-28 xl:-right-36 top-0 drop-shadow-custom"
        />
        <div className="flex flex-col w-full lg:w-1/2 gap-10 lg:gap-20">
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center lg:text-start">Never Miss Trading, Download Our Application</h2>
            <p className="text-[#ADB3BF] text-lg font-normal text-center lg:text-start">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-5 lg:gap-7">
            <Button color='transparent' href='/out' className='w-full lg:w-auto'>
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.8162 13.1516C18.2917 12.8706 18.9049 13.0283 19.1859 13.5037L26.8609 26.4912C27.1419 26.9667 26.9842 27.5799 26.5087 27.8609C26.0333 28.1419 25.4201 27.9842 25.1391 27.5087L17.4641 14.5212C17.1831 14.0458 17.3408 13.4326 17.8162 13.1516Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.4911 4.13919C12.9665 3.85815 13.5798 4.01573 13.8608 4.49116L16.8608 9.56616C17.1419 10.0416 16.9843 10.6548 16.5088 10.9359C16.0334 11.2169 15.4202 11.0593 15.1391 10.5839L12.1391 5.50891C11.8581 5.03348 12.0157 4.42024 12.4911 4.13919Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M7.69801 24.1402C8.1729 24.4221 8.32929 25.0357 8.04733 25.5106L6.85983 27.5106C6.57786 27.9855 5.96432 28.1419 5.48943 27.8599C5.01455 27.5779 4.85815 26.9644 5.14012 26.4895L6.32762 24.4895C6.60958 24.0146 7.22313 23.8582 7.69801 24.1402Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M19.5086 4.139C19.9841 4.41987 20.1419 5.03305 19.8611 5.50858L10.4111 21.5086C10.1302 21.9841 9.51701 22.1419 9.04148 21.8611C8.56594 21.5802 8.40813 20.967 8.68899 20.4915L18.139 4.49149C18.4199 4.01595 19.033 3.85814 19.5086 4.139Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21.45 21C21.45 20.4477 21.8977 20 22.45 20H29C29.5523 20 30 20.4477 30 21C30 21.5523 29.5523 22 29 22H22.45C21.8977 22 21.45 21.5523 21.45 21Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M2 21C2 20.4477 2.44772 20 3 20H17.8125C18.3648 20 18.8125 20.4477 18.8125 21C18.8125 21.5523 18.3648 22 17.8125 22H3C2.44772 22 2 21.5523 2 21Z" />
              </svg>                       
              App Store
            </Button>
            <Button color='transparent' href='/out' className='w-full lg:w-auto'>
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.99514 2.25268C5.30206 2.0802 5.64908 1.99179 6.00112 1.99639C6.34963 2.00094 6.69084 2.0965 6.99096 2.27349L27.9482 14.2758C28.2555 14.4428 28.5126 14.689 28.693 14.989C28.8765 15.2943 28.9735 15.6438 28.9735 16.0001C28.9735 16.3563 28.8765 16.7058 28.693 17.0111C28.5126 17.3111 28.2555 17.5573 27.9482 17.7243L6.991 29.7266C6.69088 29.9036 6.34965 29.9992 6.00112 30.0037C5.64907 30.0083 5.30206 29.9199 4.99514 29.7474C4.68822 29.5749 4.43226 29.3245 4.25315 29.0214C4.07403 28.7183 3.9781 28.3733 3.97505 28.0212L3.97498 28.0126L3.97501 3.97889C3.97806 3.62683 4.07403 3.28182 4.25315 2.97872C4.43226 2.67561 4.68822 2.42517 4.99514 2.25268ZM26.9345 16.0001L5.99054 4.00532L5.97501 3.99624V28.0039L5.99054 27.9948L26.9345 16.0001Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M4.56792 2.56792C4.95844 2.17739 5.59161 2.17739 5.98213 2.56792L22.6946 19.2804C23.0852 19.6709 23.0852 20.3041 22.6946 20.6946C22.3041 21.0852 21.6709 21.0852 21.2804 20.6946L4.56792 3.98213C4.17739 3.59161 4.17739 2.95844 4.56792 2.56792Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22.6946 11.3053C23.0852 11.6959 23.0852 12.329 22.6946 12.7196L5.98213 29.4321C5.59161 29.8226 4.95844 29.8226 4.56792 29.4321C4.17739 29.0415 4.17739 28.4084 4.56792 28.0178L21.2804 11.3053C21.6709 10.9148 22.3041 10.9148 22.6946 11.3053Z" />
              </svg>
              Play Store
            </Button>
            <Button color='transparent' href='/out' className='hidden lg:flex'>
              <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 7C5 5.89543 5.89543 5 7 5H13C14.1046 5 15 5.89543 15 7V13C15 14.1046 14.1046 15 13 15H7C5.89543 15 5 14.1046 5 13V7ZM13 7H7V13H13V7Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M5 19C5 17.8954 5.89543 17 7 17H13C14.1046 17 15 17.8954 15 19V25C15 26.1046 14.1046 27 13 27H7C5.89543 27 5 26.1046 5 25V19ZM13 19H7V25H13V19Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17 7C17 5.89543 17.8954 5 19 5H25C26.1046 5 27 5.89543 27 7V13C27 14.1046 26.1046 15 25 15H19C17.8954 15 17 14.1046 17 13V7ZM25 7H19V13H25V7Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M18 17C18.5523 17 19 17.4477 19 18V22C19 22.5523 18.5523 23 18 23C17.4477 23 17 22.5523 17 22V18C17 17.4477 17.4477 17 18 17Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M22 17C22.5523 17 23 17.4477 23 18V26C23 26.5523 22.5523 27 22 27H18C17.4477 27 17 26.5523 17 26C17 25.4477 17.4477 25 18 25H21V18C21 17.4477 21.4477 17 22 17Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M21 20C21 19.4477 21.4477 19 22 19H26C26.5523 19 27 19.4477 27 20C27 20.5523 26.5523 21 26 21H22C21.4477 21 21 20.5523 21 20Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M26 23C26.5523 23 27 23.4477 27 24V26C27 26.5523 26.5523 27 26 27C25.4477 27 25 26.5523 25 26V24C25 23.4477 25.4477 23 26 23Z" />
              </svg>
            </Button>
          </div>
        </div>
    </div>
}