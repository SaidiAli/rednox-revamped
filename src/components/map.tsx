import { Card } from "./ui/card";

export default function Map() {
    return (
        <Card className="border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur overflow-hidden">
            <div className="h-64 bg-muted/50 relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d852.7398344192713!2d-122.00741952240632!3d37.56309710206144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf9a812bef53%3A0xd6f29dd20a620d24!2s3467%20Pinewood%20Terrace%2C%20Fremont%2C%20CA%2094536%2C%20USA!5e0!3m2!1sen!2sug!4v1753257780151!5m2!1sen!2sug"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-lg"
                />
            </div>
        </Card>
    )
}