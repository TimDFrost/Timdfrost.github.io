function goToNextStep(step) {
    const currentStep = document.querySelectorAll(".step")[step - 1];
    const nextStep = document.querySelectorAll(".step")[step];
    const thankYou = document.getElementById("thank-you");

    currentStep.classList.add("hidden");

    if (nextStep) {
        nextStep.classList.remove("hidden");
    } else {
        thankYou.classList.remove("hidden");
    }
}
