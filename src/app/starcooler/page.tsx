import {Carousel, Flex, Line, Text, Card, Heading, Column, RevealFx, SmartLink} from "@/once-ui/components";
import {baseURL, home, newsletter} from "@/app/resources";
import {gallery, person, starcooler} from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import {Projects} from "@/components/work/Projects";
import {Mailchimp} from "@/components";
import React from "react";
import {} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export async function generateMetadata() {
  return Meta.generate({
    title: "StarCooler",
    description: starcooler.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(starcooler.title)}`,
    path: starcooler.path,
  });
}

function OgCard(props: {
  ogData: { title: string; description: string; image: string; faviconUrl: string; url: string }
}) {
  return null;
}

export default function Starcooler() {
    // @ts-ignore
    return (
        <Column maxWidth="m" gap="xl" horizontal="center">
            <Schema
                as="webPage"
                baseURL={baseURL}
                path={starcooler.path}
                title={starcooler.title}
                description={starcooler.description}
                image={`${baseURL}/og?title=${encodeURIComponent(starcooler.title)}`}
            />
            <Column fillWidth paddingY="24" gap="m">
                <Column maxWidth="s">
                    <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
                        <Heading wrap="balance" variant="display-strong-l" >
                            <>Star Cooler mini</>
                        </Heading>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
                        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                            <>Star Cooler Mini is specially designed for personal use, featuring a triple-fan air outlet that offers a powerful cooling advantage. Like a dragon on your desk, it defies the weather—keeping you comfortable wherever you are, whenever you need it.</>
                        </Text>
                    </RevealFx>
                </Column>
            </Column>
            <Carousel
                images={[
                    { src: "/images/starcooler-mini-1.png", alt: "mini1" },
                    { src: "/images/starcooler-mini-2.png", alt: "mini2" },
                ]}
            />
            <Column>
                <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
                    <Heading wrap="balance" variant="display-strong-l" >
                        <>Specifications</>
                    </Heading>
                </RevealFx>
                <section>

                    <h3>Cooling System</h3>
                    <ul>
                        <li><strong>Technology:</strong> Solid-state thermoelectric modules (gas-free)</li>
                        <li><strong>Cooling Capacity:</strong> Provides a 5–8 °C temperature drop within minutes in a well-insulated 5–10 m² space</li>
                        <li><strong>Heating Capability:</strong> Reversible thermoelectric modules enable simple swap-in heating functionality</li>
                        <li><strong>Airflow Design:</strong> Three circular vents with variable-expansion outlet for optimized directional cooling/heating</li>
                    </ul>

                    <h3>Power</h3>
                    <ul>
                        <li><strong>Power Consumption:</strong> 120 W – 280 W (typical operating range)</li>
                        <li><strong>Input Voltage:</strong> 100 – 240 VAC, 50/60 Hz (internal power adapter)</li>
                        <li><strong>Solar Compatibility:</strong> Recommended 100 – 150 W solar panel for off-grid operation</li>
                        <li><strong>Energy Optimization:</strong> Built-in smart control software.</li>
                    </ul>

                    <h3>Performance</h3>
                    <ul>
                        <li><strong>Temperature Reduction:</strong> Achieves up to 12 °C drop at ambient temperatures up to 35 °C</li>
                        <li><strong>Power Efficiency:</strong> Operates at &lt; 0.1 - 0.2 kWh per hour (~1.5 kWh/day at continuous use)</li>
                        <li><strong>Noise Level:</strong> &lt; 30 dB(A) at normal fan speed</li>
                        <li><strong>Runtime Data:</strong> Onboard microcontroller logs runtime, power draw, and temperature for performance analytics</li>
                    </ul>

                    <h3>Physical Characteristics</h3>
                    <ul>
                        <li><strong>Dimensions (W × D × H):</strong> 300 × 300 × 100 mm</li>
                        <li><strong>Weight:</strong> Approximately 2.5 kg</li>
                        <li><strong>Enclosure Material:</strong> ABS plastic housing with aluminum heat sink plates</li>
                        <li><strong>Finish:</strong> Matte white with soft-touch black trim</li>
                    </ul>

                    <h3>Features</h3>
                    <ul>
                        <li><strong>Modular Design:</strong>
                            <ul>
                                <li>Attachable modules</li>
                                <li>Optional fan module attachment</li>
                                <li>Add-on filtration or UV-C sterilization module (future expansion)</li>
                            </ul>
                        </li>
                        <li><strong>Controls & Indicators:</strong>
                            <ul>
                                <li>Touch-sensitive power/ECO mode button</li>
                                <li>LED status indicators (power, cooling, heating, solar charging)</li>
                            </ul>
                        </li>
                        <li><strong>Safety & Compliance:</strong>
                            <ul>
                                <li>Over-temperature and over-current protection circuits</li>
                                <li>RoHS compliant, CE certified</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Environmental & Sustainability</h3>
                    <ul>
                        <li><strong>Refrigerant:</strong> Gas-free (no CFCs, HFCs, or HCFCs)</li>
                        <li><strong>Carbon Footprint Reduction:</strong> Up to 20× lower energy use compared to conventional compressor ACs</li>
                        <li><strong>Materials:</strong> Recyclable plastic and aluminum components; replaceable modules to extend product life</li>
                    </ul>

                    <h3>Accessories (Included)</h3>
                    <ul>
                        <li><strong>Power Adapter:</strong> 100 – 240 VAC to 12 V DC, 6 A</li>
                        <li><strong>Interchangeable Module Tools:</strong>
                            <ul>
                                <li>1× cleaning brush (dust removal from heat sinks)</li>
                            </ul>
                        </li>
                        <li><strong><SmartLink href={"https://www.endedsaero.com"}>Quick-Start Guide & User Manual</SmartLink></strong></li>
                    </ul>

                    <p><em>Note: All specifications are based on laboratory testing under standard conditions (25 °C ambient). Actual performance may vary depending on room insulation, solar irradiance, and usage patterns.</em></p>
                </section>
            </Column>
        </Column>
    );
}
