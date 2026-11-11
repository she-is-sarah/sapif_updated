import "./ai.css";
import { styles } from "./styles";

type PipelineProps = {
  stages: string[];
  large?: boolean;
  label?: string;
};

/**
 * A connected row of stages (e.g. Idea → Prompt → Image → Video → Editing).
 * Colour comes from the --accent variable of the surrounding section.
 */
export default function Pipeline({ stages, large = false, label }: PipelineProps) {
  return (
    <ol
      className={`${styles.pipe} ${large ? styles.pipeLg : ""}`}
      aria-label={label ?? stages.join(", then ")}
    >
      {stages.map((stage, i) => (
        <li key={stage} className={styles.pipeStage}>
          <span className={styles.pipeIdx}>{String(i + 1).padStart(2, "0")}</span>
          <span className={styles.pipeLabel}>{stage}</span>
        </li>
      ))}
    </ol>
  );
}
